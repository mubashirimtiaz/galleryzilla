import styled from "styled-components";

export const UploadFormContainer = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`;

export const InputField = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const Label = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid var(--primary);
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;
  &:hover {
    background: var(--primary);
    color: white;
  }
`;

export const OutputContainer = styled.div`
  height: 60px;
  font-size: 0.8rem;
`;
export const ErrorMessage = styled.div`
  color: var(--error);
`;
