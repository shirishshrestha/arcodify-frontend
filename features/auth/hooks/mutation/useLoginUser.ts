import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginApi } from "../../api/LoginApiSlice";
import { loginSchema } from "../../utils/schema";
import z from "zod";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../redux/authSlice";

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginApiResponse {
  token: string;
}

export const useLoginUser = (): UseMutationResult<
  LoginApiResponse,
  unknown,
  LoginFormData
> => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation<LoginApiResponse, unknown, LoginFormData>({
    mutationFn: (data: LoginFormData) => loginApi(data),
    onSuccess: (userData) => {
      console.log(userData);
      sessionStorage.setItem("token", userData.token); // save token in sessionStorage
      dispatch(authLogin({ userData }));
      router.push("/"); // redirect
    },
    onError: () => {
      // handled below via loginMutation.error
    },
  });
};
