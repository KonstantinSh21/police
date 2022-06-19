<template>
  <div class="layout">
    <div>
      <router-link class="link" :to="'/'">
        Вернуться на главную
      </router-link>
      <div class="row">
        <div>
          <img src="https://static.mvd.ru/upload/site86/document_manager/Scheglov_sayt-179xx229.jpg">
        </div>
        <div class="text">
          <div class="text-m">
            Начальник Главного управления МВД России по Пермскому краю, генерал-лейтенант полиции
          </div>
          <div class="text-l">
            Щеглов Александр Николаевич
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <img src="https://static.mvd.ru/upload/site86/document_manager/Shilov_h800-179xx229.jpg">
        </div>
        <div class="text">
          <div class="text-m">
            Заместитель начальника ГУ МВД России по Пермскому краю - начальник Главного следственного управления, генерал-майор юстиции
          </div>
          <div class="text-l">
            Шилов Максим Николаевич
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <img src="https://static.mvd.ru/upload/site86/document_manager/KANAN_A.A._NA_FONE_NOVYY-179xx229.jpg">
        </div>
        <div class="text">
          <div class="text-m">
            Заместитель начальника ГУ МВД России по Пермскому краю - начальник полиции, генерал-майор полиции
          </div>
          <div class="text-l">
            Кандан Аяс Арзыланович
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Management'
}
</script>

<style scoped>
.row {
  display: flex;
  padding-bottom: 24px;
}

.text {
  margin-left: 16px;
}
</style>
