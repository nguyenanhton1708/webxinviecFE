export const adminMenu = [
  {
    //hệ thống
    name: "menu.system.header",
    link: "/system/admin-manage",
    menus: [
      {
        name: "menu.system.admin",
        link: "/system/admin-manage",
      },
      {
        name: "menu.system.employer",
        link: "/system/employer-manage",
      },
      {
        name: "menu.system.seeker",
        link: "/system/seeker-manage",
      },
      {
        name: "menu.employer.recruit-manage",
        link: "/employer/recruit-manage",
      },
      {
        name: "menu.system.blog",
        link: "/system/blog-manage",
      },
    ],
  },
];

export const employerMenu = [
  {
    //hệ thống
    name: "menu.employer.manage",
    menus: [
      {
        name: "menu.employer.infor",
        link: "/system/employer-manage",
      },
      {
        name: "menu.employer.post",
        link: "/system/post-manage",
      },
      {
        name: "menu.employer.recruit-manage",
        link: "/employer/recruit-manage",
      },
    ],
  },
];
