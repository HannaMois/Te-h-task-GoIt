import styled from 'styled-components';
import picture from '../../images/picture.svg';

export const Wrapper = styled.div`
  height: 460px;
  width: 380px;

  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Picture = styled.div`
  position: relative;
  width: 308px;
  height: 168px;
  margin: 8px 45px 18px;
  background-repeat: no-repeat;
  background-image: url(${picture});
`;

export const Logo = styled.img`
  position: relative;
  top: 20px;
  left: 20px;
`;

export const Before = styled.div`
  width: 380px;
  height: 8px;
  position: relative;
  background: #ebd8ff;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const User = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5736a3;
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Container = styled.div`
  padding-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Tweet = styled.div`
  margin-top: 62px;
  text-transform: uppercase;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #ebd8ff;
  margin-bottom: 16px;
`;
export const Follower = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 26px;
  color: #ebd8ff;
`;

export const Button = styled.button`
  padding: 14px 0;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  font-style: normal;
  border: none;
  text-transform: uppercase;
`;
