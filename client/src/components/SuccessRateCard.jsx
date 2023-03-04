import { titleFont } from '@/utils/fonts';
import CounterUp from './CounterUp';

export default function SuccessRateCard({ target, time, start, description }) {
  return (
    <div>
      {' '}
      <div className="flex justify-center drop-shadow-sm">
        <div className="block max-w-sm rounded bg-white p-6 shadow-lg dark:bg-neutral-700">
          <h5 className={`text-6xl text-gray-900 ${titleFont.className}`}>
            <CounterUp target={target} time={time} start={start} />+
          </h5>
          <p className="text-3xl text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
}
