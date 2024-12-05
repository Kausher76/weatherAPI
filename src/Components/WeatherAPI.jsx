import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function WeatherAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) {
      alert("Please enter a city name");
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.get(
        //`https://api.weatherstack.com/current?access_key=b054e4299b6113d885ea74221275bdc9&query=${city}`
        `https://api.weatherstack.com/current?access_key=a627da5258c592be2584c4d9bcf2b25d&query=${city}`
      );
  
      if (response.data.error) {
        // Check if the error is related to API limits
        if (response.data.error.code === 104) {
          setError("API rate limit exceeded. Please try again later.");
        } else {
          setError(response.data.error.info || "An error occurred.");
        }
      } else {
        setData(response.data);
      }
    } catch (error) {
      // Handle network or unexpected errors
      if (error.response && error.response.status === 429) {
        setError("API rate limit exceeded. Please wait before trying again.");
      } else {
        setError("Failed to fetch weather data. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "#f0f4f8",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        className="shadow p-4 rounded"
        style={{
          background: "#fff",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#3b82f6" }}>
          Weather App
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter city name"
              onChange={handleInputChange}
              value={city}
              style={{
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{
              backgroundColor: "#3b82f6",
              border: "none",
              padding: "10px 0",
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            {loading ? "Loading..." : "Get Weather"}
          </Button>
        </Form>

        {error && (
          <p className="text-danger text-center mt-3">{error}</p>
        )}

        {data && (
          <div className="mt-4 text-center">
            <h4
              style={{
                fontWeight: "bold",
                color: "#1e293b",
              }}
            >
              {data.location.name}, {data.location.country}
            </h4>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "48px",
                margin: "10px 0",
                color: "#3b82f6",
              }}
            >
              {data.current.temperature}°C
            </h1>
            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
              }}
            >
              {data.current.weather_descriptions[0]}
            </p>
            <div
              className="d-flex justify-content-between mt-3"
              style={{
                fontSize: "14px",
                color: "#1e293b",
              }}
            >
              <div>
                <strong>Wind:</strong> {data.current.wind_speed} km/h
              </div>
              <div>
                <strong>Pressure:</strong> {data.current.pressure} hPa
              </div>
              <div>
                <strong>Humidity:</strong> {data.current.humidity}%
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                fontSize: "14px",
                color: "#64748b",
              }}
            >
              Feels Like: {data.current.feelslike}°C
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherAPI;
