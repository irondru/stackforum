class String
  # проверка на бессмысленность текста
  def meaningless?
    metric(self) > MAX_VALID_METRIC
  end

  private

  MAX_VALID_METRIC = 15.0

  # min_count: Минимальное число символов из заданного класса, чтобы начать считать метрику (-1 - всегда считаем)
  # min_relative_count: Минимальное относительное число символов, чтобы начать считать метрику (-1.0 - всегда считаем)
  # mentic_factor: Коэффициент метрики, для класса символов

  CHAR_TYPES = {
    chars: [
      'ОоАаЕеИи', 'НнТтРрСс', 'ЛлВв', 'КкПпМмУуДдЯяЫы', 'БбГгЁёЖжЗзЙйФфХхЦцЧчШшЩщЪъЬьЭэЮю',
      'EeTt', 'AaOoNnRr', 'IiSsHhDd', 'LlFfCcMmUu', 'BbGgJjKkPpQqVvWwXxYyZz',
      '1234567890', '~`.,:;!@$%^*(-=_+?[]/\"', ')', ' '
    ],
    mentic_factor: [
      1.0, 1.0, 1.0, 1.0, 1.0,
      1.0, 1.0, 1.0, 1.0, 1.0,
      2.0, 3.0, 2.0, 1.5
      ],
    min_relative_count: [
      0.37, 0.25, 0.17, 0.14, 0.09,
      0.39, 0.24, 0.20, 0.10, 0.08,
      0.20, 0.11, 0.20, 0.25
    ],
    min_count: [
      4, 4, 4, 4, 4,
      4, 4, 4, 4, 4,
      4, 4, 4, 4
    ]
  }.freeze

  def metric(text)
    result = 0.0
    chars_count = {} # символ => число появлений
    text.each_char do |ch| # считаем число появления символов
      chars_count[ch] ||= 0
      chars_count[ch] += 1
    end
    chars_count.each do |char, char_count|
      it = -1 # порядковый номер записи в таблице
      char_relative_count = char_count / text.length.to_f # вычисляем коэфициэнт пояления симовола
      CHAR_TYPES[:chars].each_with_index do |chars, index| # ищем его в таблице
        if chars.include?(char)
          it = index
          next
        end
      end
      next if it == -1 # символ не найден
      next if CHAR_TYPES[:min_count][it] != -1 && char_count <= CHAR_TYPES[:min_count][it] #
      next if CHAR_TYPES[:min_relative_count][it] != -1.0 && char_relative_count <= CHAR_TYPES[:min_relative_count][it]
      result += char_count * CHAR_TYPES[:mentic_factor][it]
    end
    result
  end

end	