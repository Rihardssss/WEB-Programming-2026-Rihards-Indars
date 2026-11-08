function Hero() {
  return (
    <section className="bg-[radial-gradient(circle_at_15%_10%,rgba(109,93,252,0.14),transparent_34%),radial-gradient(circle_at_85%_0%,rgba(55,136,255,0.10),transparent_28%)] pt-[42px] pb-12 sm:pt-16">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-3.5 sm:px-5 min-[960px]:grid-cols-[1.4fr_0.8fr] min-[960px]:gap-14">
        <div>
          <span className="mb-2.5 block text-[11px] font-extrabold tracking-[0.14em] text-primary">
            MONDAY WORKSPACE
          </span>
          <h1 className="m-0 max-w-[760px] text-[43px] leading-[0.98] tracking-[-0.055em] sm:text-[clamp(42px,6vw,72px)]">
            Build, learn, and ship something useful.
          </h1>
          <p className="mt-6 max-w-[650px] text-base text-app-muted sm:text-lg">
            Track your current web-development tasks, upcoming deadlines, and project progress in one place.
          </p>
          <div className="mt-[30px] grid gap-3 sm:flex sm:flex-wrap">
            <a
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-primary px-[18px] text-sm font-bold text-white shadow-button transition-all duration-150 hover:-translate-y-px hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-app-line bg-white px-[18px] text-sm font-bold transition-all duration-150 hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(34,45,78,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              href="#resources"
            >
              Open resources
            </a>
          </div>
        </div>

        <aside className="rounded-[22px] border border-white/60 bg-white/78 p-6 shadow-soft backdrop-blur-[10px]">
          <p className="mb-[18px] text-[13px] font-bold text-app-muted">This week</p>
          <div className="mb-[9px] flex items-center justify-between gap-4 text-[13px]">
            <span className="text-app-muted">Course progress</span>
            <strong>68%</strong>
          </div>
          <div className="h-[9px] overflow-hidden rounded-full bg-[#eceef4]">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-[#8e80ff]" style={{ width: "68%" }}></div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-app-surface-soft p-[16px_10px] text-center">
              <strong className="block text-[21px]">4</strong>
              <span className="mt-[3px] block text-[10px] text-app-muted">Open tasks</span>
            </div>
            <div className="rounded-2xl bg-app-surface-soft p-[16px_10px] text-center">
              <strong className="block text-[21px]">2</strong>
              <span className="mt-[3px] block text-[10px] text-app-muted">Due soon</span>
            </div>
            <div className="rounded-2xl bg-app-surface-soft p-[16px_10px] text-center">
              <strong className="block text-[21px]">7</strong>
              <span className="mt-[3px] block text-[10px] text-app-muted">Completed</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
