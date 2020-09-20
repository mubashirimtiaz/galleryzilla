import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageGridContainer = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;

export const ImageWrap = styled(motion.div)`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;
`;
export const ImageContainer = styled(motion.img)`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
`;
