<template>
  <div class="card">
    <div class="card-image"><img :src="ad.enclosure.$.url" height="136" /></div>
    <div class="card-body">
      <div class="card-body-item">
        <a :href="ad.link" target="_blank" rel="noopener" v-html="ad.title"></a>
        <p>{{ Number(ad["g-core:price"]).toFixed(2) }} $</p>
      </div>
      <div class="card-body-item card-description">
        <p v-html="ad.description"></p>
      </div>
      <div class="card-body-item date-and-map">
        <p>{{ new Date(ad["dc:date"]).toLocaleString() }}</p>
        <a
          :href="
            `https://www.google.com/maps/search/maps+${ad['geo:lat']},${
              ad['geo:long']
            }`
          "
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
  .card-body-item:not(.date-and-map) {
    flex-direction: column;
  }
  .card-body-item.date-and-map {
    align-items: center;
    justify-content: space-around;
  }
  .card-image {
    display: none;
  }
}
</style>
