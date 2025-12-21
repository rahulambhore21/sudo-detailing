import clsx from "clsx";
import svgPaths from "../svg-93djfyojny";

type ArrowIconWrapperProps = {
  className?: string;
};

export function ArrowIconWrapper({ className }: ArrowIconWrapperProps) {
   return (
    <div className={clsx("relative shrink-0 size-[16px]", className)}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7071 17.7071">
            <path d={svgPaths.p158a8180} fill="currentColor" id="Vector 11" />
        </svg>
    </div>
   )
}