import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const CountContainer = styled.div`
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border-radius: ${theme.borderRadius.ls};
  box-shadow: ${theme.shadows.card};

  &:hover {
    cursor: pointer;
  }
`;

const InnerCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: ${({ isFlip }) => (isFlip ? "rotateY(180deg)" : "rotateY(0)")};
  transition: transform 0.6s;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.ls};
`;

const FrontCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backface-visibility: hidden;
`;

const BackCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const CountNum = styled.p`
  padding: ${theme.spacing.ls};
  color: ${theme.colors.text};
  font-size: 70px;
  font-weight: 900;
`;

const ButtonBox = styled.div`
  padding: ${theme.spacing.md};
  display: flex;
  gap: 20px;
`;

const PlusBtn = styled.button`
  background-color: transparent;
  color: ${theme.colors.text};
  font-size: 18px;
  font-weight: 700;
`;

const MinusBtn = styled(PlusBtn)`
  color: ${theme.colors.error};
`;

const ResetBtn = styled(PlusBtn)``;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  width: 100px;
  height: 100px;
  border-radius: ${theme.borderRadius.round};
  background-color: #fafafa;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

const Age = styled(Name)``;

const Hobbies = styled(Name)`
  display: flex;
  gap: 10px;
  font-size: 15px;
`;

const EditBtnGroup = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  right: 20px;
  background-color: transparent;
  color: ${theme.colors.text};
  font-size: 15px;
  font-weight: 700;
`;

const EditBtn = styled.button`
  background-color: transparent;
  color: ${theme.colors.text};
  font-size: 15px;
  font-weight: 700;
`;

const LikeBtn = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: transparent;
  color: ${theme.colors.text};
  font-size: 20px;
  font-weight: 700;
`;

const SaveEdit = styled(EditBtn)``;
const CancleEdit = styled(EditBtn)``;

const NameInput = styled.input``;
const AgeInput = styled.input``;

export default function Counter({ name, age, hobbies }) {
  const { count, increment, decrement, reset } = useCounter(0);
  const [isFlip, setIsFlip] = useState(false);
  const [profile, setProfile] = useState({ name, age });
  const [likes, setLikes] = useState(0);
  const [editing, setEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  const handleFlip = () => {
    setIsFlip((p) => !p);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setEditing(true);
  };

  const handleLikes = (e) => {
    e.stopPropagation();
    setLikes((like) => like + 1);
  };

  const handleProfile = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    setTempProfile((profile) => ({ ...profile, [name]: value }));
  };

  const handleCancle = (e) => {
    e.stopPropagation();
    setEditing(false);
    setTempProfile(profile);
  };
  const handleSave = (e) => {
    e.stopPropagation();
    setEditing(false);
    setProfile(tempProfile);
  };
  return (
    <>
      <CountContainer onClick={handleFlip}>
        <InnerCount isFlip={isFlip}>
          <FrontCount>
            <CountNum>{count}</CountNum>
            <ButtonBox>
              <PlusBtn onClick={increment}>Count Plus</PlusBtn>
              <MinusBtn onClick={decrement}>Count Minus</MinusBtn>
            </ButtonBox>
            <ResetBtn onClick={reset} className="reset-btn">
              Reset
            </ResetBtn>
          </FrontCount>
          <BackCount>
            <EditBtnGroup>
              {editing ? (
                <>
                  <CancleEdit onClick={handleCancle}>취소</CancleEdit>
                  <SaveEdit onClick={handleSave}>저장</SaveEdit>
                </>
              ) : (
                <EditBtn onClick={handleEdit}>수정</EditBtn>
              )}
            </EditBtnGroup>

            <Profile>{profile.name.charAt(0)}</Profile>
            {editing ? (
              <>
                <NameInput
                  type="text"
                  name="name"
                  value={tempProfile.name}
                  onChange={handleProfile}
                  onClick={(e) => e.stopPropagation()}
                />
                <AgeInput
                  type="number"
                  name="age"
                  value={tempProfile.age}
                  onChange={handleProfile}
                  onClick={(e) => e.stopPropagation()}
                />
              </>
            ) : (
              <>
                <Name>{profile.name}</Name>
                <Age>{profile.age}</Age>
              </>
            )}
            <Hobbies>
              {hobbies.map((h, index) => (
                <p key={index}>{h}</p>
              ))}
            </Hobbies>
            <LikeBtn onClick={handleLikes}>♥️ {likes}</LikeBtn>
          </BackCount>
        </InnerCount>
      </CountContainer>
    </>
  );
}
