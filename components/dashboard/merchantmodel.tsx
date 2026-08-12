// "use client";

// import { useMemo, useState } from "react";

// export default function MerchantModel() {

//   return (
//     <section>
//       {/* ADD MERCHANT */}
//       {openModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//           <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
//             <div className="mb-6 flex items-center justify-between">
//               <h2 className="text-2xl font-bold text-gray-600">Add Merchant</h2>

//               <button
//                 onClick={() => setOpenModal(false)}
//                 className="text-2xl text-gray-600"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//               <div>
//                 <label className="mb-2 block text-sm text-gray-600 font-medium">
//                   Business Name
//                 </label>

//                 <input
//                   type="text"
//                   value={form.businessName}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       businessName: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-400 p-3 outline-none focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm text-gray-600 font-medium">
//                   Business Email
//                 </label>

//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       email: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-400 p-3 outline-none focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm  text-gray-600 font-medium">
//                   Phone Number
//                 </label>

//                 <input
//                   type="text"
//                   value={form.phone}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       phone: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border p-3 outline-none border-gray-400 focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm text-gray-600 font-medium">
//                   Category
//                 </label>

//                 <input
//                   type="text"
//                   value={form.category}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       category: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-400 p-3 outline-none focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm text-gray-600 font-medium">
//                   Savings Plan
//                 </label>

//                 <select
//                   value={form.savingsPlan}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       savingsPlan: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-400 text-gray-600 p-3 outline-none focus:border-primary"
//                 >
//                   <option value="">Select Plan</option>
//                   <option>Regular Savings</option>
//                   <option>Fixed Savings</option>
//                   <option>Target Savings</option>
//                   <option>Locked Savings</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm text-gray-600 font-medium">
//                   Status
//                 </label>

//                 <select
//                   value={form.status}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       status: e.target.value,
//                     })
//                   }
//                   className="w-full rounded-xl border border-gray-400 text-gray-600 p-3 outline-none focus:border-primary"
//                 >
//                   <option>Active</option>
//                   <option>Pending</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
//               <button
//                 onClick={() => setOpenModal(false)}
//                 className="rounded-xl border px-6 py-3 border-gray-400 text-gray-600"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={() => {
//                   console.log(form);

//                   setOpenModal(false);
//                 }}
//                 className="rounded-xl bg-primary px-6 py-3 text-white"
//               >
//                 Create Merchant
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
