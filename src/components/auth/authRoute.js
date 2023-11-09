import authLayout from "@/common/components/authLayout";
// import beforeLoginAuthLayout from "../../common/components/beforeLoginAuthLayout.vue";
// import afterAuthLayout from "../../common/components/afterAuthLayout.vue";
// import resetPassword from "./resetPassword/resetPasswordComponent.vue";
import loginComponent from "../auth/login/loginComponent";
// import forgotPassword from "../auth/forgotPassword/forgotPasswordComponent.vue";

const authRoutes = [
  {
    path: "",
    component: authLayout,
    children: [
      {
        path: "/login",
        component: loginComponent,
        meta: { title: "Login" },
      },
    ],
  },
//   {
//     path: "",
//     component: afterAuthLayout,
//     props: true,
//     children: [
//       {
//         path: "/changePassword",
//         children: [
//           {
//             path: "",
//             component: resetPassword,
//             meta: {
//               title: "Change Password",
//               breadcrumb: [
//                 { label: "Dashboard", to: "/dashboard" },
//                 {
//                   label: "Change Password",
//                   to: "/changePassword",
//                   disabled: true,
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "",
//     component: beforeLoginAuthLayout,
//     children: [
//       {
//         path: "/forgotPassword",
//         children: [
//           {
//             path: "",
//             component: forgotPassword,
//             meta: { title: "Forgot Password" },
//           },
//           {
//             path: ":token",
//             component: resetPassword,
//             meta: {
//               title: "Reset Password",
//               breadcrumb: [
//                 { label: "Dashboard", to: "/dashboard" },
//                 {
//                   label: "Reset Password",
//                   to: "/forgotPassword",
//                   disabled: true,
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
];
export default authRoutes;
