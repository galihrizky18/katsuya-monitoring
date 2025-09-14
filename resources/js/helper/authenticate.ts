import axios from "axios";

export default async function logout() {
    try {
        await axios.post("/logout");
        window.location.href = '/';
    } catch (error: unknown) {
        console.error("Logout failed:", error);
    }
}
