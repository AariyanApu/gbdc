import { TypingTitle } from '@/components/CustomText'
import { conditionData, membershipCancel, termsData } from '@/utils/data'
import { banglaFont } from '@/utils/fonts'

export default function Terms() {
  return (
    <div
      className={`isolate mx-auto max-w-6xl ${banglaFont.className} my-2 rounded-3xl bg-white py-6 shadow-xl`}
    >
      {/* Title */}
      <TypingTitle title={['গ', 'ঠ', 'ন', 'ত', 'ন্ত্র']} />
      {/* bullted Text */}
      <div className="w-full space-y-2 px-4 text-lg sm:mx-auto sm:max-w-4xl sm:px-6 lg:px-0">
        <p className=" mt-6 text-2xl">অনুচ্ছেদ ১ : </p>
        <p className="pl-5">
          সংগঠনের নামঃ গৌরনদী ব্লাড ডোনার্স ক্লাব (জি.বি.ডি.সি)
        </p>
        <p className=" mt-6 text-2xl">অনুচ্ছেদ ২:</p>
        <p className="">অবস্থান ও কার্যক্রম এলাকাঃ</p>
        <p className="pl-5">
          ক) সংগঠনের কার্যালয়: সরকারী গৌরনদী পাইলট মাধ্যমিক বিদ্যালয় সংলগ্ন,
          গৌরনদী, বরিশাল।{' '}
        </p>
        <p className="pl-5">
          খ) কার্যক্রম এলাকা: বরিশাল জেলা ব্যাপি এই সংগঠনের কার্যক্রম পরিচালনা
          করা হবে। ভবিষ্যতে নিবন্ধন করন কর্তৃপক্ষের অনুমোদন স্বাপেক্ষে বাংলাদেশ
          ব্যাপি এই সংগঠনের কল্যানমূখি কার্যক্রম সম্প্রসারন করা যেতে পারে।{' '}
        </p>
        <div>
          <p className="mb-2 mt-6 text-2xl">
            অনুচ্ছেদ ৩: সংগঠনের লক্ষ ও উদ্দেশ্য:
          </p>
          <ul className="list-inside list-decimal space-y-2 pl-5">
            {termsData?.map((item, idx) => <li key={idx}>{item.text}</li>)}
          </ul>
        </div>
        <div>
          <p className="mb-2 mt-6 text-2xl">অনুচ্ছেদ ৪ : তহবিলের উৎস/আয়: </p>
          <p className="pl-5">
            1. এই সংগঠন এর সদস্যদের যে কোন দান, অনুদান ও উপহার এনে তহবিল সংযোজন
            করা হবে।{' '}
          </p>
          <p className="pl-5">
            2. যে কোন দেশী-বিদেশি সংস্থা, এনজিও, প্রাইভেট ও পাবলিক সংগঠন, যে কোন
            কোম্পানি, ফার্মা, সরকারি দান, অনুদান, নগদ অর্থ কিংবা সম্পদে এই
            সংগঠনের তহবিলে সাদরে গৃহীত হবে।
          </p>
        </div>
        <div>
          <p className="mb-2 mt-6 text-2xl">অনুচ্ছেদ ৫ : সম্পত্তি আহরন: </p>
          <p className="pl-5">
            এই সংগঠন বাংলাদেশের যে কোন স্থাবর অস্থাবর সম্পত্তি ধারন-অধিগ্রহন,
            ক্রয়, ভাড়ায় ক্রয় দেয়া ব্যবহার উপযোগী করা উন্নয়ন কর। বিক্রয় বা
            অন্য যে কোন আইনানুগভাবে সম্পত্তি ও স্বত্ব ত্যাগের ব্যবস্থা করা।{' '}
          </p>
        </div>
        <div>
          <p className="mb-2 mt-6 text-2xl underline">
            ভলান্টিয়ারদের জন্য অবশ্যই পালনীয় আইন:
          </p>
          <ol className="list-inside list-decimal space-y-2 pl-5">
            {conditionData?.map((item, idx) => <li key={idx}>{item.text}</li>)}
          </ol>
        </div>
        <div>
          <p className="mb-2 mt-6 text-2xl underline">সদস্য পদ বাতিল: </p>
          <ol className="list-inside list-decimal space-y-2 pl-5">
            {membershipCancel?.map((item, idx) => (
              <li key={idx}>{item.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
