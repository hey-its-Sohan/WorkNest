import { useState, useContext } from "react";
import { Building2, User, Briefcase } from "lucide-react";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const CompleteProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    role: "employee",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.companyName) {
      setError("Please complete all required fields");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        uid: user.uid,
        name: formData.name,
        email: user.email,
        companyName: formData.companyName,
        role: formData.role,
        profileCompleted: true,
      };

      await axios.post("http://localhost:3000/users", payload);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Failed to complete profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Complete Your Profile
        </h1>
        <p className="text-muted-foreground mb-8">
          Please complete your profile to access your WorkNest dashboard.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg text-error text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Your full name"
                className="w-full pl-12 pr-4 h-14 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Your company name"
                className="w-full pl-12 pr-4 h-14 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Role
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <select
                className="w-full pl-12 pr-4 h-14 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
              >
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Saving...
              </>
            ) : (
              "Complete Profile"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CompleteProfile;
