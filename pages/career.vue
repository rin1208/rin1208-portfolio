<template>
  <div>
    <div class="timeline">
      <h2>Intern Career</h2>
      <simple-timeline :items="career"></simple-timeline>
    </div>
    <div class="timeline">
      <h2>
        Participated Competition
      </h2>
      <simple-timeline :items="tournament"></simple-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      career: [
        {
          tag: "2019-03",
          content: "JX PRESS Corporation",
          footer: "Backend Engineer Intern Start"
        }
      ],
      tournament: [
        {
          tag: "2018-08",
          content: "ICTSC",
          footer: "Preliminaries"
        },
        {
          tag: "2018-09",
          content: "ISUCON",
          footer: "Preliminaries"
        },
        {
          tag: "2018-10",
          content: "pgbattle"
        },
        {
          tag: "2018-12",
          content: "ICTSC",
          footer: "Preliminaries"
        },
        {
          tag: "2019-05",
          content: "SPAJAM2019",
          footer: "Preliminaries"
        },
        {
          tag: "2019-08",
          content: "ICTSC",
          footer: "Preliminaries"
        }
      ]
    };
  }
};
</script>

<style>
.timeline {
  margin: 20px;
  padding: 25px 35px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
h2 {
  font-size: 20px;
}
</style>
