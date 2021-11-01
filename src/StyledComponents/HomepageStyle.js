import styled from "styled-components";

export const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  `

export const HomepageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #282C34;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  .homepage-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .homepage-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .homepage-button {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #333;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
  `

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: #ffff;
  margin-bottom: 1rem;
  `