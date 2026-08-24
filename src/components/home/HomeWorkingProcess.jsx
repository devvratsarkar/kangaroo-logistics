import SectionBadge from '../common/SectionBadge.jsx'
import {
  CheckCircleIcon,
  FileSignatureIcon,
  ProcessIcon,
  TruckIcon,
} from '../ui/AllSVG.jsx'
import { workingProcessSteps } from '../../data/workingProcess.js'

const stepIcons = {
  file: FileSignatureIcon,
  truck: TruckIcon,
  check: CheckCircleIcon,
}

export default function HomeWorkingProcess() {
  return (
    <section className="working-process-section relative overflow-hidden bg-primary py-14 text-white sm:py-16 lg:py-20">
      <img
        src="/home/process-shape.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-8 left-0 hidden w-28 opacity-70 lg:block xl:w-36"
      />
      <img
        src="/home/process-shape2.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 hidden w-32 opacity-70 lg:block xl:w-40"
      />

      <div className="custom_container relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={ProcessIcon} tone="light">
            Working Process
          </SectionBadge>
          <h2 className="mt-6 font-display text-[32px] leading-[1.2] font-bold text-white sm:text-[40px] lg:text-[48px] lg:leading-[1.15]">
            We follow 3 Easy Steps
            <br className="hidden sm:block" />
            <span className="sm:ml-1">to finish our work</span>
          </h2>
        </div>

        <ol className="working-process-grid relative mt-12 grid gap-8 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {workingProcessSteps.map((step, index) => {
            const Icon = stepIcons[step.icon]
            return (
              <li
                key={step.id}
                className={[
                  'working-process-step relative text-center',
                  index < workingProcessSteps.length - 1 ? 'working-process-step--connected' : '',
                ].join(' ')}
              >
                <div className="mx-auto flex size-18 items-center justify-center rounded-full border border-dashed border-secondary/70 bg-white/5">
                  <Icon className="size-8 text-secondary" strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-display text-[22px] font-semibold text-white sm:text-[24px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-70 text-[15px] leading-7 text-white/60 sm:text-[16px]">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
