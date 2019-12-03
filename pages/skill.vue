<template>
  <div>
    <el-row>
      <el-col
        :xs="{span: 24, offset: 0}"
        :sm="{span: 24, offset: 0}"
        :md="{span: 24, offset: 0}"
        :lg="{span: 12, offset: 0}"
        :xl="{span: 12, offset: 0}"
      >
        <div class="skill">
          <h2 class="category">Back End</h2>
          <ul>
            <li class="tag">Go : October, 2018 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value1"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Python : May, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value2"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </el-col>
      <el-col
        :xs="{span: 24, offset: 0}"
        :sm="{span: 24, offset: 0}"
        :md="{span: 24, offset: 0}"
        :lg="{span: 12, offset: 0}"
        :xl="{span: 12, offset: 0}"
      >
        <div class="skill">
          <h2 class="category">Front End</h2>
          <ul>
            <li class="tag">Javascrpt : June, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value3"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Vuejs : June, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value4"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :xs="{span: 24, offset: 0}"
        :sm="{span: 24, offset: 0}"
        :md="{span: 24, offset: 0}"
        :lg="{span: 12, offset: 0}"
        :xl="{span: 12, offset: 0}"
      >
        <div class="skill">
          <h2 class="category">DB</h2>
          <ul>
            <li class="tag">MySQL : April, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value5"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Dynamodb : October, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value6"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">S3 : June, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value7"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Elasticsearch : September, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value8"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </el-col>
      <el-col
        :xs="{span: 24, offset: 0}"
        :sm="{span: 24, offset: 0}"
        :md="{span: 24, offset: 0}"
        :lg="{span: 12, offset: 0}"
        :xl="{span: 12, offset: 0}"
      >
        <div class="skill">
          <h2 class="category">Other</h2>
          <ul>
            <li class="tag">Git : October, 2018 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value9"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Docker: April, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value10"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Docker-Compose: April, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value11"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
            <li class="tag">Firebase: December, 2019 ~</li>
            <ul>
              <li class="tag">
                <p style="display:inline;">
                  Level
                  <el-rate
                    style="display:inline;"
                    disabled-void-color="#777777"
                    v-model="value12"
                    disabled
                    :colors="colors"
                  ></el-rate>
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 3.0,
      value2: 2.5,
      value3: 2.0,
      value4: 2.3,
      value5: 2.0,
      value6: 2.5,
      value7: 3.0,
      value8: 2.5,
      value9: 3.0,
      value10: 3.0,
      value11: 3.0,
      value12: 2.0,
      colors: ["#64AAFD", "#64AAFD", "#64AAFD"]
    };
  }
};
</script>

<style>
.skill {
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.tag {
  font-size: 20px;
}
.category {
  font-size: 20px;
}
</style>
