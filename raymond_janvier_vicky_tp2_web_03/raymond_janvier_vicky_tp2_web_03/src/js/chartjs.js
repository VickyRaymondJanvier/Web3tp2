import Chart from "https://esm.sh/chart.js/auto";

let graphique = new Chart(document.querySelector("#a").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["3056", "3057", "3058", "3059"],
    datasets: [
      {
        label: "Chats disparue à Pointe",
        data: [5, 8, 9, 7],
        backgroundColor: ["rgba(36, 228, 241, 0.66)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      title: {
        display: true,

        color: "#fff",
        font: {
          family: "Arial",
          size: 16,
          weight: "700",
        },
        padding: { top: 15, bottom: 10 },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Chats disparus à Pointe-Calumet par années",
          color: "#fff",
          font: {
            family: "Arial",
            size: 12,
            weight: "600",
          },
          padding: { top: 15 },
        },
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1,
        },
        border: {
          color: "rgba(222, 222, 222, 0.1)",
          width: 2,
          dash: [10, 10],
        },
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500",
          },
          maxTicksLimit: 6,
          mirror: false,
          z: 1,
        },
      },

      y: {
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500",
          },
          mirror: false,
        },
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1,
        },
        border: {
          color: "rgba(222, 222, 222, 0.1)",
          width: 2,
          dash: [10, 10],
        },
      },
    },
  },
});
