import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { toast } from "react-toastify";

// Create the context
const NotificationContext = createContext();

// Custom hook to use the context
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

// Named export for the provider
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from backend
  const fetchNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/notifications");
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Create a new notification
  const createNotification = async (notificationData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/notifications",
        notificationData
      );
      setNotifications((prev) => [...prev, response.data]);
      return response.data;
    } catch (error) {
      console.error("Error creating notification:", error);
      throw error;
    }
  };

  // Mark a notification as read
  const markAsRead = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/api/notifications/${id}/read`);
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id ? { ...notification, isRead: true } : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  // Delete a notification
  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/notifications/${id}`);
      setNotifications((prev) =>
        prev.filter((notification) => notification._id !== id)
      );
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  // Show a toast notification
  const showNotification = (message, type = "info") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "info":
      default:
        toast.info(message);
        break;
    }
  };

  // Fetch notifications on mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  const value = {
    notifications,
    fetchNotifications,
    createNotification,
    markAsRead,
    deleteNotification,
    showNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
