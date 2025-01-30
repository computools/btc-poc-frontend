import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fieldNames, signInSchema } from "../../lib/schemas";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokens } from "../../store/auth/authAction";
import { authData } from "../../store/store";
import { Loader } from "../Loader";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(authData);

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      [fieldNames.email]: "",
      [fieldNames.password]: "",
    },
  });

  const onSubmit = (values) => {
    dispatch(fetchTokens(values));
  };

  if (loading) {
    return (
      <div className="min-h-64 flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormLabel className="text-gray-700 block text-xl !text-center font-[sans-serif] font-semibold">
          Sign into your account
        </FormLabel>
        {error && (
          <FormLabel className="text-base text-red-500 block mt-6">
            {error}
          </FormLabel>
        )}
        <FormField
          control={form.control}
          name={fieldNames.email}
          render={({ field }) => (
            <FormItem className="!mt-6">
              <FormControl>
                <Input className="font-medium font-[sans-serif]" placeholder="Email Adress" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fieldNames.password}
          render={({ field }) => (
            <FormItem className="!mt-6">
              <FormControl>
                <Input className="font-medium font-[sans-serif]" type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full !mt-6 text-sm !py-3 h-fit shadow-md">
          Login
        </Button>
      </form>
      <FormLabel className="text-sm font-[sans-serif] text-gray-500 block text-center mt-6">
        Forgot Password?
      </FormLabel>
      <Link
        to="/sign-up"
        className="text-md text-indigo-800 block text-center mt-1 font-[sans-serif]"
      >
        Don't have an account? Register here
      </Link>
      <FormLabel className="text-sm font-[sans-serif] text-gray-500 block text-center my-10">
        Terms of use. Privacy policy
      </FormLabel>
    </Form>
  );
};
