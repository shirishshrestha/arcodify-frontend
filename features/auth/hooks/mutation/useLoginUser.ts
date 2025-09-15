import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginApi } from "../../api/LoginApiSlice";
import { loginSchema } from "../../utils/schema";
import z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginFormData) => loginApi(data),
    onSuccess: (data) => {
      sessionStorage.setItem("token", data.token); // save token in sessionStorage
      router.push("/"); // redirect
    },
    onError: () => {
      // handled below via loginMutation.error
    },
  });
};
