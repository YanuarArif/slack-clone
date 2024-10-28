import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0 text-left">
        <CardTitle>Daftar untuk lanjut</CardTitle>
        <CardDescription className="">
          Gunakan Email atau service lain untuk login
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Input
            disabled={false}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Lanjut
          </Button>
        </form>
        <Separator />

        {/* Tombol Login Google dan Github */}
        <Button
          disabled={false}
          onClick={() => {}}
          variant="outline"
          size="lg"
          className="w-full relative"
        >
          <FcGoogle className="size-5 absolute text-center left-2.5" />
          Login dengan Google
        </Button>
        <Button
          disabled={false}
          onClick={() => {}}
          variant="outline"
          size="lg"
          className="w-full relative"
        >
          <FaGithub className="size-5 absolute text-center left-2.5" />
          Login dengan Github
        </Button>
        <div>
          <p className="text-xs text-muted-foreground">
            Sudah punya akun?{" "}
            <span
              onClick={() => setState("signIn")}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
