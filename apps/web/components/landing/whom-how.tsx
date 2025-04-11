"use client";

import GalleryWithTags from "./mfstack/GalleryWithTags";
import SectionHeader from "./mfstack/SectionHeader";

export default function WhomHow() {
  return (
    <div className="mx-auto lg:px-8 flex flex-col gap-y-12">
      <SectionHeader
        sectionTag={"For whom and how?"}
        sectionTitle={"Tailor made solutions for your business goals"}
        sectionDescription={
          "Flexible mutual fund solutions that grow with your business, regardless of size or scale."
        }
      />

      <GalleryWithTags />
    </div>
  );
}
