import type { RepositoryWidget } from '@/domain/RepositoryWidget'
import type { RepositoryWidgetRepository } from '@/domain/RepositoryWidgetRepository'

export function useAddRepositoryWidget(repository: RepositoryWidgetRepository): {
  save: (widget: RepositoryWidget) => Promise<void>
} {
  async function save(widget: RepositoryWidget): Promise<void> {
    await repository.save(widget)
  }

  return { save }
}
