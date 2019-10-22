import React from "react";
import PaperBase from "../base/PaperBase";
import Title from "../low/text/Title";
import Paragraph from "../low/text/Paragraph";

export default function DummySmall() {
  return (
    <PaperBase>
      <Title>This is a sheet of paper.</Title>
      <Paragraph>
        Paper can be used to build surface or other elements for your
        application.
      </Paragraph>
    </PaperBase>
  );
}
