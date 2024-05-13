import { workHistory } from "@/data/constants";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Model = dynamic(() => import("@/components/model"));

export default function Home() {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <Suspense>
            <Model />
          </Suspense>
        </div>
      </div>
      <Resume className="w-1/2" />
    </div>
  );
}

function Resume(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div
      className={clsx(
        "rounded-2xl border p-6 border-zinc-700/40",
        props.className
      )}
    >
      <h2 className="flex text-sm font-semibold items-center text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workHistory.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
              <Image src={role.image} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {role.organizationName}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xstext-zinc-400">{role.role}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500"
                aria-label={role.duration}
              >
                {role.duration}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        target="_blank"
        href={"/Hamzas_Resume.pdf"}
        className="group mt-6 w-full flex items-center border shadow-md border-zinc-600 p-4 max-w-max rounded-lg bg-zinc-800/70 hover:bg-zinc-700/80"
      >
        Download CV
        <ArrowDownIcon className="h-6 w-6 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50" />
      </Link>
    </div>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100/10 stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
