import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 40px 0 0;
  margin-left: 40px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

export const Image = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  border: solid 2px black;
  object-fit: cover;
  border-radius: 50%;
`;

export const Text = styled.p`
  margin: 40px 0 30px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.14;
`;

export const TagContent = styled.p`
  margin: 0 0 30px;
  font-size: 30px;
  line-height: 1.14;
  color: #888888;
`;

export const LocationContent = styled.p`
  margin: 0;
  font-size: 30px;
  line-height: 1.14;
  color: #888888;
`;

export const ListStats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  width: 161px;

  border: solid 1px #dcdcdc;
  background-color: #f0f8ff;

  :last-child {
    border-bottom: solid 1px #dcdc;
    border-top: solid 1px #dcdc;
    border-right: solid 1px #dcdc;
    border-left: none;
    border-bottom-right-radius: 8px;
  }
  :first-child {
    border-bottom: solid 1px #dcdc;
    border-top: solid 1px #dcdc;
    border-right: none;
    border-left: solid 1px #dcdc;
    border-bottom-left-radius: 8px;
  }
`;

export const LabelText = styled.span`
  font-size: 24px;
  line-height: 1.14;
  color: #888888;
  text-align: center;
  margin-bottom: 10px;
`;

export const QuantityText = styled.span`
  font-size: 24px;
  line-height: 1.14;
  font-weight: 700;
  text-align: center;
`;
