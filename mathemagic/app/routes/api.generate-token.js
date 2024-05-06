import { json } from "@remix-run/node";
import { generateToken } from "~/utils/jwt";

export const action = async () => {
  const payload = { userId: "123", username: "john.doe" };
  const token = generateToken(payload);
  console.log("Generated Token:", token);
  return json({ token }, 200);
};