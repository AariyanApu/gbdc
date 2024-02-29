import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { banglaFont } from '@/utils/fonts'

export default function Terms() {
  return (
    <Container>
      <div className={`isolate mx-auto max-w-7xl ${banglaFont.className} py-5`}>
        <TypingTitle title={['গ', 'ঠ', 'ন', 'ত', 'ন্ত্র']} />
      </div>
    </Container>
  )
}
