module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/lib/api/travelpayouts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// استيرادات (Imports) إن وجدت
__turbopack_context__.s([
    "getFlightDeals",
    ()=>getFlightDeals,
    "getHotels",
    ()=>getHotels,
    "getPopularDestinations",
    ()=>getPopularDestinations
]);
async function getFlightDeals(origin, months = 6) {
    try {
        const response = await fetch(`https://api.travelpayouts.com/v1/prices/cheap?origin=${origin}&currency=USD`, {
            headers: {
                'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || ''
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch flight deals');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching flight deals:', error);
        return [];
    }
}
async function getPopularDestinations() {
    try {
        const response = await fetch('https://api.travelpayouts.com/v1/city-directions?currency=USD', {
            headers: {
                'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || ''
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch popular destinations');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching popular destinations:', error);
        return [];
    }
}
async function getHotels(city, checkIn, checkOut) {
    try {
        const response = await fetch(`https://api.travelpayouts.com/v1/hotels/search?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}`, {
            headers: {
                'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || ''
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch hotels');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        return [];
    }
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// احتفظ بواحدة فقط من هاتين الاستيرادات
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$travelpayouts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/travelpayouts.ts [app-rsc] (ecmascript)"); // اختر هذا
;
;
async function Home() {
    const deals = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$travelpayouts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFlightDeals"])('JED', 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Jaola Travel"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__078iwqj._.js.map