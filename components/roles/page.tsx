// "use client";

// import { useState } from "react";
// import {
//   LayoutDashboard,
//   Users,
//   ShieldCheck,
//   FileText,
//   Bell,
//   Settings,
//   Menu,
//   X,
// } from "lucide-react";

// // const navigation = [
// //   {
// //     name: "Dashboard",
// //     icon: LayoutDashboard,
// //   },
// //   {
// //     name: "Users",
// //     icon: Users,
// //   },
// //   {
// //     name: "Roles & Access",
// //     icon: ShieldCheck,
// //   },
// //   {
// //     name: "Content",
// //     icon: FileText,
// //   },
// //   {
// //     name: "Security & Alerts",
// //     icon: Bell,
// //   },
// //   {
// //     name: "Settings",
// //     icon: Settings,
// //   },
// // ];

// const permissions = [
//   {
//     permission: "View user accounts",
//     support: true,
//     compliance: true,
//     admin: true,
//   },
//   {
//     permission: "Freeze / unfreeze accounts",
//     support: false,
//     compliance: true,
//     admin: true,
//   },
//   {
//     permission: "Approve KYC documents",
//     support: false,
//     compliance: true,
//     admin: true,
//   },
//   {
//     permission: "Edit app content (CMS)",
//     support: false,
//     compliance: false,
//     admin: true,
//   },
//   {
//     permission: "Manage staff roles",
//     support: false,
//     compliance: false,
//     admin: true,
//   },
// ];

// function PermissionValue({ allowed }: { allowed: boolean }) {
//   return (
//     <span
//       className={`inline-flex items-center justify-center text-[20px] font-medium ${
//         allowed ? "text-gray-800/80" : "text-gray-800/80"
//       }`}
//       aria-label={allowed ? "Allowed" : "Not allowed"}
//     >
//       {allowed ? "✓" : "—"}
//     </span>
//   );
// }

// export default function Roles() {
//   return (
//     <div className="min-h-screen text-white ">
//       {/* Main Content */}
//       <main className="min-w-0 flex-1">
//         <div className="mx-auto w-full max-w-[1500px] px-0 py-6 sm:px-0 sm:py-8 lg:px-0 xl:px-0">
//           {/* Page Header */}
//           <div className="mb-8 -mt-10 ">
//             <h1 className="text-[24px] font-semibold text-black tracking-tight sm:text-[27px]">
//               Roles & permissions
//             </h1>
//             <p className="mt-1 text-[13px] text-gray-700">
//               Manage banners, promotions, articles, onboarding messages and
//               product content.
//             </p>
//           </div>

//           {/* Permission Table Card */}
//           <section className="w-full overflow-hidden">
//             {/*
//                 The overflow is intentionally placed around the table.
//                 This keeps the whole page responsive on mobile.
//               */}
//             <div className="w-full overflow-x-auto overscroll-x-contain">
//               <table className="w-full min-w-[760px] border-collapse">
//                 <thead>
//                   <tr className="border-b border-gray-300">
//                     <th className="w-[48%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80 sm:px-4">
//                       Permission
//                     </th>

//                     <th className="w-[16%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80">
//                       Support
//                     </th>

//                     <th className="w-[16%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80">
//                       Compliance
//                     </th>

//                     <th className="w-[20%] px-4 pb-4 text-left text-[13px] font-semibold uppercase tracking-wide text-gray-800/80">
//                       Admin
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {permissions.map((item) => (
//                     <tr
//                       key={item.permission}
//                       className="border-b border-gray-300 last:border-b-1"
//                     >
//                       <td className="px-4 py-[17px] text-[16px] font-medium text-gray-800/80 sm:py-[18px]">
//                         {item.permission}
//                       </td>

//                       <td className="px-4 py-[17px] sm:py-[18px]">
//                         <PermissionValue allowed={item.support} />
//                       </td>

//                       <td className="px-4 py-[17px] sm:py-[18px]">
//                         <PermissionValue allowed={item.compliance} />
//                       </td>

//                       <td className="px-4 py-[17px] sm:py-[18px]">
//                         <PermissionValue allowed={item.admin} />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Pencil,
  Trash2,
  ShieldCheck,
  Users,
  X,
  Check,
} from "lucide-react";

/* ================================== TYPES ========================================= */

type Permission = {
  id: string;
  label: string;
};

type PermissionGroup = {
  id: string;
  name: string;
  permissions: Permission[];
};

type Role = {
  id: string;
  name: string;
  description: string;
  users: number;
  permissions: string[];
};

/* ============================   PERMISSION GROUPS ========================================= */

const permissionGroups: PermissionGroup[] = [
  {
    id: "users",
    name: "Users",
    permissions: [
      {
        id: "users.view",
        label: "View user accounts",
      },
      {
        id: "users.edit",
        label: "Edit user accounts",
      },
      {
        id: "users.freeze",
        label: "Freeze / unfreeze accounts",
      },
      {
        id: "users.delete",
        label: "Delete user accounts",
      },
    ],
  },

  {
    id: "kyc",
    name: "KYC & Compliance",
    permissions: [
      {
        id: "kyc.view",
        label: "View KYC documents",
      },
      {
        id: "kyc.approve",
        label: "Approve KYC documents",
      },
      {
        id: "kyc.reject",
        label: "Reject KYC documents",
      },
    ],
  },

  {
    id: "savings",
    name: "Savings",
    permissions: [
      {
        id: "savings.view",
        label: "View savings",
      },
      {
        id: "savings.create",
        label: "Create savings products",
      },
      {
        id: "savings.edit",
        label: "Edit savings products",
      },
      {
        id: "savings.delete",
        label: "Delete savings products",
      },
      {
        id: "savings.approve",
        label: "Approve savings withdrawals",
      },
    ],
  },

  {
    id: "transactions",
    name: "Transactions",
    permissions: [
      {
        id: "transactions.view",
        label: "View transactions",
      },
      {
        id: "transactions.approve",
        label: "Approve transactions",
      },
      {
        id: "transactions.reverse",
        label: "Reverse transactions",
      },
      {
        id: "transactions.export",
        label: "Export transactions",
      },
    ],
  },

  {
    id: "content",
    name: "Content",
    permissions: [
      {
        id: "content.view",
        label: "View app content",
      },
      {
        id: "content.create",
        label: "Create content",
      },
      {
        id: "content.edit",
        label: "Edit app content",
      },
      {
        id: "content.delete",
        label: "Delete content",
      },
    ],
  },

  {
    id: "security",
    name: "Security & Alerts",
    permissions: [
      {
        id: "security.view",
        label: "View security alerts",
      },
      {
        id: "security.manage",
        label: "Manage security settings",
      },
    ],
  },

  {
    id: "roles",
    name: "Roles & Access",
    permissions: [
      {
        id: "roles.view",
        label: "View roles",
      },
      {
        id: "roles.create",
        label: "Create roles",
      },
      {
        id: "roles.edit",
        label: "Edit roles",
      },
      {
        id: "roles.delete",
        label: "Delete roles",
      },
      {
        id: "roles.assign",
        label: "Assign roles to staff",
      },
    ],
  },
];

/* =========================   INITIAL ROLES =================================== */

const initialRoles: Role[] = [
  {
    id: "super-admin",
    name: "Super Admin",
    description: "Full access to all dashboard features.",
    users: 2,
    permissions: permissionGroups.flatMap((group) =>
      group.permissions.map((permission) => permission.id),
    ),
  },

  {
    id: "savings-manager",
    name: "Savings Manager",
    description: "Manages savings products and withdrawals.",
    users: 3,
    permissions: [
      "users.view",
      "kyc.view",
      "savings.view",
      "savings.create",
      "savings.edit",
      "savings.approve",
      "transactions.view",
      "transactions.export",
    ],
  },

  {
    id: "compliance",
    name: "Compliance Officer",
    description: "Handles KYC and compliance activities.",
    users: 2,
    permissions: [
      "users.view",
      "users.freeze",
      "kyc.view",
      "kyc.approve",
      "kyc.reject",
      "security.view",
      "transactions.view",
    ],
  },

  {
    id: "support",
    name: "Support Officer",
    description: "Provides customer support and account assistance.",
    users: 5,
    permissions: [
      "users.view",
      "users.edit",
      "savings.view",
      "transactions.view",
    ],
  },
];

/* ===========================   ROLE MODAL ================================== */

type RoleModalProps = {
  role: Role | null;
  onClose: () => void;
  onSave: (role: Role) => void;
};

function RoleModal({ role, onClose, onSave }: RoleModalProps) {
  const [name, setName] = useState(role?.name ?? "");
  const [description, setDescription] = useState(role?.description ?? "");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    role?.permissions ?? [],
  );

  const togglePermission = (permissionId: string) => {
    setSelectedPermissions((current) =>
      current.includes(permissionId)
        ? current.filter((id) => id !== permissionId)
        : [...current, permissionId],
    );
  };

  const toggleGroup = (group: PermissionGroup) => {
    const groupPermissionIds = group.permissions.map(
      (permission) => permission.id,
    );

    const allSelected = groupPermissionIds.every((id) =>
      selectedPermissions.includes(id),
    );

    if (allSelected) {
      setSelectedPermissions((current) =>
        current.filter((id) => !groupPermissionIds.includes(id)),
      );
    } else {
      setSelectedPermissions((current) => [
        ...new Set([...current, ...groupPermissionIds]),
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    const newRole: Role = {
      id:
        role?.id ?? `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      users: role?.users ?? 0,
      permissions: selectedPermissions,
    };

    onSave(newRole);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="flex max-h-[90vh] w-full max-w-[720px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Modal Header */}

        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-[18px] font-semibold text-gray-900">
              {role ? "Edit Role" : "Create Role"}
            </h2>

            <p className="mt-1 text-[12px] text-gray-500">
              {role
                ? "Update this role and its permissions."
                : "Create a role and assign permissions."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-5 py-5 sm:px-6"
        >
          {/* Role Information */}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-[13px] font-medium text-gray-700">
                Role name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Savings Manager"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-gray-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-[13px] font-medium text-gray-700">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what this role is responsible for..."
                rows={3}
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-gray-500"
              />
            </div>
          </div>

          {/* Permissions */}

          <div className="mt-7">
            <div className="mb-4">
              <h3 className="text-[15px] font-semibold text-gray-900">
                Permissions
              </h3>

              <p className="mt-1 text-[12px] text-gray-500">
                Select the actions this role should be allowed to perform.
              </p>
            </div>

            <div className="space-y-4">
              {permissionGroups.map((group) => {
                const ids = group.permissions.map(
                  (permission) => permission.id,
                );

                const selectedCount = ids.filter((id) =>
                  selectedPermissions.includes(id),
                ).length;

                const allSelected = selectedCount === ids.length;

                return (
                  <div
                    key={group.id}
                    className="overflow-hidden rounded-xl border border-gray-200"
                  >
                    {/* Group Header */}

                    <div className="flex items-center justify-between bg-gray-50 px-4 py-3">
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-800">
                          {group.name}
                        </h4>

                        <p className="mt-0.5 text-[11px] text-gray-500">
                          {selectedCount}/{ids.length} selected
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleGroup(group)}
                        className="text-[12px] font-medium text-gray-700 hover:text-black"
                      >
                        {allSelected ? "Clear all" : "Select all"}
                      </button>
                    </div>

                    {/* Permission List */}

                    <div className="divide-y divide-gray-100">
                      {group.permissions.map((permission) => {
                        const checked = selectedPermissions.includes(
                          permission.id,
                        );

                        return (
                          <label
                            key={permission.id}
                            className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => togglePermission(permission.id)}
                              className="peer sr-only"
                            />

                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                                checked
                                  ? "border-gray-800 bg-gray-800 text-white"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {checked && <Check size={13} />}
                            </span>

                            <span className="text-[13px] text-gray-700">
                              {permission.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}

          <div className="mt-6 flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
            >
              {role ? "Save Changes" : "Create Role"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN ROLES PAGE
========================================================= */

export default function Roles() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  /* =======================================================
     FILTER ROLES
  ======================================================= */

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const query = search.toLowerCase();

      return (
        role.name.toLowerCase().includes(query) ||
        role.description.toLowerCase().includes(query)
      );
    });
  }, [roles, search]);

  /* =======================================================
     ADD / EDIT ROLE
  ======================================================= */

  const handleSaveRole = (role: Role) => {
    setRoles((current) => {
      const exists = current.some((item) => item.id === role.id);

      if (exists) {
        return current.map((item) => (item.id === role.id ? role : item));
      }

      return [...current, role];
    });

    setShowModal(false);
    setEditingRole(null);
  };

  /* =======================================================
     DELETE ROLE
  ======================================================= */

  const handleDeleteRole = (role: Role) => {
    if (role.users > 0) {
      const confirmed = window.confirm(
        `${role.name} currently has ${role.users} assigned user(s). Are you sure you want to delete this role?`,
      );

      if (!confirmed) {
        return;
      }
    } else {
      const confirmed = window.confirm(
        `Are you sure you want to delete ${role.name}?`,
      );

      if (!confirmed) {
        return;
      }
    }

    setRoles((current) => current.filter((item) => item.id !== role.id));

    setOpenMenu(null);
  };

  /* =======================================================
     EDIT ROLE
  ======================================================= */

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
    setShowModal(true);
    setOpenMenu(null);
  };

  /* =======================================================
     OPEN CREATE MODAL
  ======================================================= */

  const handleCreateRole = () => {
    setEditingRole(null);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen text-white">
      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-[1500px] px-0 py-6 sm:px-0 sm:py-8 lg:px-0 xl:px-0">
          {/* ================================== PAGE HEADER ================================================= */}

          <div className="mb-7 -mt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-[24px] font-semibold tracking-tight text-black sm:text-[27px]">
                  Roles & permissions
                </h1>

                <p className="mt-1 text-[13px] text-gray-700">
                  Manage staff roles and control access to dashboard features.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCreateRole}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-[13px] font-medium text-white transition hover:bg-black sm:w-auto"
              >
                <Plus size={17} />
                Add Role
              </button>
            </div>
          </div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-[320px]">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search roles..."
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-[13px] text-gray-700 outline-none transition focus:border-gray-500"
              />
            </div>

            <div className="text-[12px] text-gray-500">
              {filteredRoles.length}{" "}
              {filteredRoles.length === 1 ? "role" : "roles"}
            </div>
          </div>

          {/* =================================================
              ROLES TABLE
          ================================================= */}

          <section className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="w-full overflow-x-auto overscroll-x-contain">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Role
                    </th>

                    <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Users
                    </th>

                    <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Permissions
                    </th>

                    <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Description
                    </th>

                    <th className="w-[70px] px-5 py-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRoles.map((role) => (
                    <tr
                      key={role.id}
                      className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                    >
                      {/* ROLE */}

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                            <ShieldCheck size={17} className="text-gray-700" />
                          </div>

                          <div>
                            <p className="text-[14px] font-semibold text-gray-800">
                              {role.name}
                            </p>

                            <p className="mt-0.5 text-[11px] text-gray-500">
                              {role.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* USERS */}

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Users size={15} />

                          <span className="text-[13px]">{role.users}</span>
                        </div>
                      </td>

                      {/* PERMISSIONS */}

                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-700">
                          {role.permissions.length} permissions
                        </span>
                      </td>

                      {/* DESCRIPTION */}

                      <td className="max-w-[320px] px-5 py-5">
                        <p className="truncate text-[13px] text-gray-600">
                          {role.description}
                        </p>
                      </td>

                      {/* ACTIONS */}

                      <td className="relative px-5 py-5">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMenu(openMenu === role.id ? null : role.id)
                          }
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                        >
                          <MoreVertical size={18} />
                        </button>

                        {openMenu === role.id && (
                          <div className="absolute right-4 top-[52px] z-20 w-[160px] overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg">
                            <button
                              type="button"
                              onClick={() => handleEditRole(role)}
                              className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[13px] text-gray-700 transition hover:bg-gray-50"
                            >
                              <Pencil size={15} />
                              Edit Role
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDeleteRole(role)}
                              className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[13px] text-red-600 transition hover:bg-red-50"
                            >
                              <Trash2 size={15} />
                              Delete Role
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* EMPTY STATE */}

            {filteredRoles.length === 0 && (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <ShieldCheck size={22} className="text-gray-500" />
                </div>

                <h3 className="mt-4 text-[15px] font-semibold text-gray-800">
                  No roles found
                </h3>

                <p className="mt-1 max-w-[300px] text-[12px] text-gray-500">
                  Try changing your search or create a new role.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* =====================================================
          CREATE / EDIT MODAL
      ===================================================== */}

      {showModal && (
        <RoleModal
          role={editingRole}
          onClose={() => {
            setShowModal(false);
            setEditingRole(null);
          }}
          onSave={handleSaveRole}
        />
      )}
    </div>
  );
}
