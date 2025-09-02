import { useState } from "react";
import { user } from "./user";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (email === user.email && password === user.password) {
            localStorage.setItem("token", user.token);
            setError("");
            window.location.href = "/";
        } else {
            setError("Email və ya şifrə səhvdir!");
        }
    };


    return (
        <div className="h-[100vh] flex justify-center items-center dark:bg-gray-50">
            <div className="flex flex-col w-[600px] h-[800px] p-6 rounded-md sm:p-10 dark:text-gray-800 bg-white shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>

                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="email2@gmail.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                            >
                                Sign in
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">
                            Don't have an account yet?{" "}
                            <a href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
