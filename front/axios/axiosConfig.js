import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8000'
});

export default apiClient;

// apiClient : 모든 request에 대한 baseURL(http://localhost:8000)을 설정하여 새롭게 만들어지는 axios 인스턴스
// apiClient 가 URL 그 자체가 아니라 URL을 필드로 가진
