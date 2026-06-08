// احتفظ بواحدة فقط من هاتين الاستيرادات
import { getFlightDeals } from '@/lib/api/travelpayouts'; // اختر هذا
// import { getFlightDeals } from '@/lib/services/flightService'; // أو هذا

export default async function Home() {
  const deals = await getFlightDeals('JED', 6);
  
  return (
    <div>
      <h1>Jaola Travel</h1>
      {/* باقي المكونات */}
    </div>
  );
}
