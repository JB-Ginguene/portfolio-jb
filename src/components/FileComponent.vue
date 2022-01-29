<template>
  <div>
    <button @click="downloadFile">DownLoad with axios</button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { onMounted } from "@vue/runtime-core";

import axios from "axios";

export default defineComponent({
  //   mounted() {
  //     this.downloadFile();
  //   },
  setup() {
    onMounted(() => {
      downloadFile();
    });
    function downloadFile() {
      axios({
        url: "../resume/resume-jb-ginguene.pdf",
        method: "GET",
        responseType: "blob",
      }).then((res) => {
        var FILE = window.URL.createObjectURL(new Blob([res.data]));

        var docUrl = document.createElement("x");
        docUrl.href = FILE;
        docUrl.setAttribute("download", "resume-jb-ginguene.pdf");
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    }
    return { downloadFile };
  },
});
</script>
