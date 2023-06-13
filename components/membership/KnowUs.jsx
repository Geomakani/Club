import React from "react";
import Image from "next/image";

const KnowUs = () => {
  return (
    <div className="w-[85%] m-auto grid lg:grid-cols-2 grid-cols-1 py-16">
      <Image src="/assets/view.png" alt="view" width={550} height={550} />

      <div className="text-right">
        <h2 className="text-3xl font-bold mb-4">اعرفنا أكتر</h2>
        <p>النادي هنا لمساعدتك</p>
        <p className="mb-6">
          خبراؤنا متاحون للإجابة على أي أسئلة قد تكون لديكم. لدينا الإجابات
        </p>
        <h2 className="text-3xl font-bold mb-4">يمكنك زيارتنا</h2>
        <p>نادي شيراتون , محافظة القاهرة , مصر</p>
        <p className="mb-6">لا تتردد في التواصل معنا</p>

        <h2 className="text-3xl font-bold mb-4">الايميل</h2>
        <p className="mb-6">info@theclub-sheraton.com</p>

        <h2 className="text-3xl font-bold mb-4">الاتصال على</h2>
        <div className="flex justify-end">
          <Image
            src="/assets/hotlineBlack.png"
            alt="hotline"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
