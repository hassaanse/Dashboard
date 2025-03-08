// import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// export const options: NextAuthOptions = {
//   secret: "VideoDashboardCampaign", // Replace with your secret

//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username:",
//           type: "text",
//           placeholder: "Enter Username",
//         },
//         password: {
//           label: "Password:",
//           type: "password",
//           placeholder: "Enter Password",
//         },
//       },
//       async authorize(credentials) {
//         try {
//           console.log("Authorizing with credentials:", credentials);

//           const response = await axios.post("http://localhost:8000/admin/login", {
//             email: credentials?.username,
//             name: credentials?.username,
//             password: credentials?.password,
//           });

//           console.log("API response:", response.data);

//           // Check response validity
//           if (response.status === 200 && response.data?.user) {
//             return response.data.user; // Successful login
//           } else {
//             console.error("Invalid credentials provided.");
//             throw new Error("Invalid username or password");
//           }
//         } catch (error) {
//           if (axios.isAxiosError(error)) {
//             console.error("API error:", error.response?.data || error.message);
//             throw new Error(error.response?.data?.message || "Internal server error");
//           } else {
//             console.error("Unexpected error:", error);
//             throw new Error("An unexpected error occurred during authentication");
//           }
//         }
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/auth/signin", // Customize as needed
//     error: "/auth/error",   // Error page
//   },
// };


import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const options: NextAuthOptions = {
  secret: "VideoDashboardCampaign", // Replace with your secret

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter Username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        try {
          console.log("Authorizing with credentials:", credentials);

          // const response = await axios.post("https://thekoi.ca/backened/admin/login",
          const response = await axios.post("http://localhost:8000/admin/login",
          
          {
            email: credentials?.username, // Use the username field as email
            password: credentials?.password,
          });

          console.log("API response:", response.data);

          // Check response validity
          if (response.status === 200 && response.data) {
            // Map the API response to the user object expected by NextAuth
            const user = {
              id: response.data.id,
              name: response.data.username,
              email: credentials?.username, // Use the provided username as email
              role: response.data.role,
              token: response.data.token, // Include the token in the user object
            };
            return user; // Successful login
          } else {
            console.error("Invalid credentials provided.");
            throw new Error("Invalid username or password");
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error("API error:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Internal server error");
          } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred during authentication");
          }
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin", // Customize as needed
    error: "/auth/error",   // Error page
  },
};