function Resources() {
  return (
    <aside className="rounded-card border border-app-line bg-app-surface p-6" id="resources">
      <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.14em] text-primary">RESOURCES</p>
      <h2 className="m-0 text-[28px] tracking-[-0.035em]">Useful links</h2>
      <p className="mt-2 mb-[18px] text-[13px] text-app-muted">Keep these close while working through the project.</p>
      <div className="grid gap-2">
        <a
          className="flex items-center gap-3 rounded-[13px] border border-app-line p-3 transition-colors duration-150 hover:border-[#cacfe0] hover:bg-app-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          href="#"
        >
          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[10px] bg-[#f0edff] text-[10px] font-extrabold text-primary">
            01
          </span>
          <span className="grid gap-0.5">
            <strong className="text-xs">Course repository</strong>
            <small className="text-[10px] text-app-muted">Starter code and weekly tasks</small>
          </span>
        </a>
        <a
          className="flex items-center gap-3 rounded-[13px] border border-app-line p-3 transition-colors duration-150 hover:border-[#cacfe0] hover:bg-app-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          href="#"
        >
          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[10px] bg-[#f0edff] text-[10px] font-extrabold text-primary">
            02
          </span>
          <span className="grid gap-0.5">
            <strong className="text-xs">Reference notes</strong>
            <small className="text-[10px] text-app-muted">Quick examples and explanations</small>
          </span>
        </a>
        <a
          className="flex items-center gap-3 rounded-[13px] border border-app-line p-3 transition-colors duration-150 hover:border-[#cacfe0] hover:bg-app-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          href="#"
        >
          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[10px] bg-[#f0edff] text-[10px] font-extrabold text-primary">
            03
          </span>
          <span className="grid gap-0.5">
            <strong className="text-xs">Submission guide</strong>
            <small className="text-[10px] text-app-muted">Checklist before you submit</small>
          </span>
        </a>
      </div>
      <div className="mt-[18px] rounded-[13px] border border-[#f3e4b6] bg-[#fff8e8] p-[14px]">
        <strong className="text-[11px] text-[#9a6c16]">Tip</strong>
        <p className="mt-1 mb-0 text-[11px] text-[#735d34]">
          Use browser DevTools while migrating the page. Compare computed styles before and after each change.
        </p>
      </div>
    </aside>
  );
}

export default Resources;
