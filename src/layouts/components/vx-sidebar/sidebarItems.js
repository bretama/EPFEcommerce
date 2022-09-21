export default [

  {
    header: "",
    i18n: "",
  },
  {
    url: '/dashboard/analytics',
    name: "dashboardAnalytics",
    slug: "dashboardAnalytics",
    i18n: "Dashboard",
    icon: "GridIcon",
  },

  {
    url: null,
    name: "report",
    icon: "GridIcon",
    i18n: "report",
    submenu: [
      {
        url: '/pages/customer-report',
        name: "customerReport",
        slug: "customerReport",
        i18n: "customerReport",
      },
      {
        url: '/pages/manufacturer-report',
        name: "manufacturerReport",
        slug: "manufacturerReport",
        i18n: "manufacturerReport",
      },
    ]
  },


  {
    url: null,
    name: "ePharmacy",
    icon: "ShoppingCartIcon",
    i18n: "ePharmacy",
    submenu: [
      {
        url: '/pages/eCommerce/shop',
        name: "Shop",
        slug: "ecommerce-shop",
        i18n: "Shop",
      },
      // {
      //   url: '/pages/eCommerce/wish-list',
      //   name: "Wish List",
      //   slug: "ecommerce-wish-list",
      //   i18n: "WishList",
      // },
      {
        url: '/pages/eCommerce/checkout',
        name: "Checkout",
        slug: "ecommerce-checkout",
        i18n: "Checkout",
      },
    ]
  },

  {
    url: null,
    name: "Accounts",
    icon: "UsersIcon",
    i18n: "Accounts",
    submenu: [
      {
        url: '/pages/view-user',
        name: "Users",
        slug: "Users",
        i18n: "Users",
        icon: "UserIcon"
      },
      {
        url: '/pages/view-company',
        name: "Companies",
        slug: "Companies",
        i18n: "Companies",
        icon: "BriefcaseIcon"
      },
      {
        url: '/pages/view-customer',
        name: "Customers",
        slug: "Customers",
        i18n: "Customers",
        icon: "UsersIcon"
      },

      {
        url: '/pages/fetch-roles-for-permission',
        name: "fetchRolesForPermission",
        slug: "assignPermissions",
        i18n: "assignPermissions",
        icon: "SettingsIcon",
      },
    ]
  },

  {
    url: null,
    name: "DataConfiguration",
    icon: "SettingsIcon",
    i18n: "dataConfiguration",
    submenu: [
      {
        url: '/pages/view-stock-sites',
        name: "StockSite",
        slug: "stock-site",
        i18n: "stockSite",
      },

      {
        url: '/pages/view-order-type',
        name: "ViewOrderType",
        slug: "ViewOrderType",
        i18n: "orderType",
      },

      {
        url: '/pages/view-order-status-type',
        name: "ViewOrderStatusType",
        slug: "ViewOrderStatusType",
        i18n: "orderStatusType",
      },

      {
        url: '/pages/order-type-status-type',
        name: "orderTypeStatusType",
        slug: "orderTypeStatusType",
        i18n: "orderTypeStatusType",
      },

      {
        url: '/pages/view-order-time-limit',
        name: "orderTimeLimit",
        slug: "orderTimeLimit",
        i18n: "orderTimeLimit",
      },

      {
        url: '/pages/view-categories',
        name: "viewCategories",
        slug: "viewCategories",
        i18n: "categories",
        icon: "BriefcaseIcon",
      },
      {
        url: '/pages/view-countries',
        name: "viewCountries",
        slug: "viewCountries",
        i18n: "countries",
        icon: "BriefcaseIcon",
      },
      {
        url: '/pages/view-regions',
        name: "viewRegions",
        slug: "viewRegions",
        i18n: "regions",
        icon: "BriefcaseIcon",
      },
      // {
      //   url: '/pages/view-zones',
      //   name: "viewZones",
      //   slug: "viewZones",
      //   i18n: "zones",
      //   icon: "BriefcaseIcon",
      // },
      {
        url: '/pages/view-transaction-reason',
        name: "viewTransactionReason",
        slug: "viewTransactionReason",
        i18n: "viewTransactionReason",
        icon: "BriefcaseIcon",
      },

      {
        url: '/pages/view-roles',
        name: "viewRoles",
        slug: "viewRoles",
        i18n: "roles",
        icon: "BriefcaseIcon",
      },

      {
        url: '/pages/view-privileges',
        name: "viewPrivileges",
        slug: "viewPrivileges",
        i18n: "privileges",
        icon: "BriefcaseIcon",
      },

    ]
  },

  // {
  //   header: "",
  //   i18n: "",
  // },
  {
    url: '/pages/view-inventory',
    name: "Inventory",
    slug: "Inventory",
    i18n: "Inventory",
    icon: "PackageIcon",
  },
  {
    url: '/pages/insert-inventory-item-list',
    name: "Insert to Inventory",
    slug: "Insert to Inventory",
    i18n: "Insert to Inventory",
    icon: "PlusCircleIcon",
  },
  {
    url: null,
    name: "Orders",
    i18n: "Orders",
    icon: "ServerIcon",
    submenu: [
      {
        url: '/pages/order/viewOrders',
        name: "Ordered",
        slug: "Ordered",
        i18n: "Ordered",
        icon: "UserIcon"
      },
      {
        url: '/pages/order/paidOrders',
        name: "Paid",
        slug: "Paid",
        i18n: "Paid",
        icon: "UserIcon"
      },
    ]
  },

  {
    url: '/pages/transaction/viewTransaction',
    name: "Transaction",
    slug: "Transaction",
    i18n: "Transaction",
    icon: "SlidersIcon",
  },
  {
    header: "",
    i18n: "",
  },

    {
    url: null,
    name: "Customer",
    icon: "UsersIcon",
    i18n: "Customer",
    submenu: [
     {
    url: '/pages/my-inventory',
    name: "myInventory",
    slug: "myInventory",
    i18n: "myInventory",
    icon: "PackageIcon",
  },
    {
      url: '/pages/customer/view-customer-inventory',
      name: "viewCustomerInventory",
      slug: "view-customer-inventory",
      i18n: "soldItems",
      icon: "ShoppingCartIcon",
  },
  {
      url: '/pages/customer/view-transaction',
      name: "viewCustomerTransaction",
      slug: "viewCustomerTransaction",
      i18n: "viewCustomerTransaction",
      icon: "ShoppingCartIcon",
  },
    ]
  },

]
