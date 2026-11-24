import { API_BASE_URL } from "../constants";
import { auth } from "../firebase-config";

export async function checkAuth(navigate, redirectPath = "/error") {
  try {
    const user = auth.currentUser;

    if (user) return true;

    const idToken = localStorage.getItem("idToken");
    if (!idToken) {
      navigate(redirectPath);
      return false;
    }

    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${idToken}` },
    });

    if (!response.ok) {
      navigate(redirectPath);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Auth check failed:", err);
    navigate(redirectPath);
    return false;
  }
}
