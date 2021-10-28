import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID PM396t5IaRo7G373JjQMH4-T59ewxym_0tu7IZjmn2A',
  },
});
