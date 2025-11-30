// commitlint.config.cjs
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      // 可选：自定义规则
      'type-enum': [
        2,
        'always',
        [
          'feat',     // 新功能
          'fix',      // 修复 bug
          'docs',     // 文档更新
          'style',    // 代码格式（不影响逻辑）
          'refactor', // 重构
          'perf',     // 性能优化
          'test',     // 测试相关
          'build',    // 构建系统 or 外部依赖
          'ci',       // CI 配置
          'chore',    // 杂项（如 deps 更新）
          'revert'    // 回滚
        ]
      ],
      'subject-case': [0] // 允许任意大小写（默认是 sentence-case）
    }
  };