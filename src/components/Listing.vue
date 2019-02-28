<template>
  <div class="card">
    <div class="card-image"><img :src="ad.image_url" height="136" /></div>
    <div class="card-body">
      <div class="card-body-item">
        <a :href="ad.url" target="_blank" rel="noopener" v-html="ad.title"></a>
        <p>{{ Number(ad.price).toFixed(2) }} $</p>
      </div>
      <div class="card-body-item card-description">
        <p v-html="ad.description"></p>
      </div>
      <div class="card-body-item distances">
        <p>@ peel in {{ distanceToPeel }} min {{ getEmoji(distanceToPeel) }}</p>
        <p>@ udem in {{ distanceToUdem }} min {{ getEmoji(distanceToUdem) }}</p>
      </div>
      <div class="card-body-item date-and-map">
        <p>{{ new Date(ad.published_at).toLocaleString() }}</p>
        <a
          :href="`https://www.google.com/maps/search/maps+${ad.lat},${ad.lng}`"
          target="_blank"
          rel="noopener"
          >maps</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listing",
  props: {
    ad: Object
  },
  computed: {
    distanceToPeel() {
      const [distance] = this.ad.distances;
      return distance ? this.durationInMinutes(distance.duration) : null;
    },
    distanceToUdem() {
      const [, distance] = this.ad.distances;
      return distance ? this.durationInMinutes(distance.duration) : null;
    }
  },
  methods: {
    durationInMinutes(seconds) {
      return Number(seconds / 60).toFixed(0);
    },
    getEmoji(minutes) {
      if (minutes < 10) {
        return "😍";
      }
      if (minutes < 20) {
        return "😄";
      }
      if (minutes < 30) {
        return "😊";
      }
      if (minutes < 35) {
        return "🤔";
      }

      return "😒";
    }
  }
};
</script>

<style scoped>
.card {
  align-items: center;
  display: flex;
  border: 1px solid #2a2425;
  border-radius: 4px;
  background-color: #24282a;
  padding: 8px 16px;
  margin-bottom: 16px;
}
.card-image {
  height: 128px;
  margin-right: 16px;
  width: 128px;
  overflow: hidden;
}
.card-body {
  display: flex;
  flex: 2 1 0;
  flex-direction: column;
}
.card-body-item {
  display: flex;
  justify-content: space-between;
}
.card-body-item.date-and-map,
.card-body-item.date-and-map p {
  font-size: 0.8em;
}
.card-description {
  text-align: justify;
}
@media (max-width: 768px) {
  .card-body-item:not(.date-and-map):not(.distances) {
    flex-direction: column;
  }
  .card-body-item.date-and-map,
  .card-body-item.distances {
    align-items: center;
    justify-content: space-around;
  }
  .card-image {
    display: none;
  }
}
</style>
