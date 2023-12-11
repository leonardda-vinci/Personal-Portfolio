import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({
  children
}: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium uppercase mb-8 text-center tracking-[20px]">{children}</h2>
  );
}
