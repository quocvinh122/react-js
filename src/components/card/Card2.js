import React from "react";
import styled, { css } from "styled-components";
const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .card-user {
      display: flex;
      align-items: center;
      column-gap: 12px;
    }
    .user-avatar {
      width: 30px;
      height: 30px;
      border-radius: 100rem;
      object-fit: cover;
      flex-shrink: 0;
    }
    .user-name {
      font-weight: 300;
      font-style: 16px;
      color: #333;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-title {
      font-style: 18px;
      font-weight: 500;
      color: ${props => props.theme.colors.blue};;
    }
    .card-amount {
      font-size: 18px;
      font-weight: bold;
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
      ${(props) =>
        props.secondary &&
        css`
          background: linear-gradient(86.88deg, #20e3b2, #2cccff);
        `};
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;
// const CardImage = styled.div`
//   height: 400px;
//   width: 100%;
//   border-radius: 8px;
// `;
// const CardImg = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: inherit;
// `;
// const CardContent = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, 50%);
//   width: calc(100% - 36px);
//   bottom: 0;
//   background-color: white;
//   z-index: 10;
//   border-radius: 20px;
//   padding: 20px;
// `;
// const CardTop = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 30px;
// `;
// const CardUser = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 12px;
// `;
// const UserAvatar = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 100rem;
//   object-fit: cover;
//   flex-shrink: 0;
// `;
// const UserName = styled.span`
//   font-weight: 300;
//   font-style: 16px;
//   color: #333;
// `;
// const CardFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const CardTitle = styled.h3`
//   font-style: 18px;
//   font-weight: 500;
//   color: black;
// `;
// const CardAmount = styled.span`
//   font-size: 18px;
//   font-weight: bold;
//   background: linear-gradient(
//     86.88deg,
//     #7d6aff 1.38%,
//     #ffb86c 64.35%,
//     #fc2872 119.91%
//   );
//   ${(props) =>
//     props.secondary &&
//     css`
//       background: linear-gradient(86.88deg, #20e3b2, #2cccff);
//     `};
//   color: transparent;
//   -webkit-background-clip: text;
//   background-clip: text;
// `;
// const CardMeta = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 12px;
// `;
const Card2 = (props) => {
  return (
    <StyledCard  secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span className="user-name">@zndron</span>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.svg" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">
            12,000 SWL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
