import { useParams, useNavigate } from "react-router-dom";
import { postList } from "./posts";
import styled from "@emotion/styled";
import { lightTheme, theme } from "../styles/theme";

const PostWrap = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  min-height: 300px;
  background-color: ${lightTheme.colors.surface};
  border-radius: ${theme.borderRadius.ls};
`;

const TitleText = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.colors.surface};
  border-radius: ${theme.borderRadius.ls};
`;

const PostItem = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const NavGoLink = styled.button`
  font-size: 18px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${lightTheme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  color: #0c0c0c;
  font-weight: 700;
`;

export function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = postList.find((p) => p.id === Number(id));

  return (
    <PostWrap>
      <TitleText>Post ID: {id}</TitleText>
      <PostList>
        <PostItem>{post.title}</PostItem>
        <PostItem>{post.content}</PostItem>
      </PostList>

      <NavGoLink onClick={() => navigate(-1)}>목록으로 돌아가기</NavGoLink>
    </PostWrap>
  );
}
