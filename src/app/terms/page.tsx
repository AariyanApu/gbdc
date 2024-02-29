import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { termsData } from '@/utils/data'
import { banglaFont } from '@/utils/fonts'

export default function Terms() {
  return (
    <Container>
      <div className={`isolate mx-auto max-w-7xl ${banglaFont.className} py-5`}>
        {/* Title */}
        <TypingTitle title={['গ', 'ঠ', 'ন', 'ত', 'ন্ত্র']} />
        {/* bullted Text */}
        <div className="mx-auto max-w-4xl space-y-2 text-lg">
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
            করা হবে। ভবিষ্যতে নিবন্ধন করন কর্তৃপক্ষের অনুমোদন স্বাপেক্ষে
            বাংলাদেশ ব্যাপি এই সংগঠনের কল্যানমূখি কার্যক্রম সম্প্রসারন করা যেতে
            পারে।{' '}
          </p>
          <div>
            <p className="mb-2 mt-6 text-2xl">
              অনুচ্ছেদ ৩: সংগঠনের লক্ষ ও উদ্দেশ্য:
            </p>
            <ul className="list-inside list-decimal space-y-2 pl-5">
              {termsData?.map((item, idx) => <li key={idx}>{item.text}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
