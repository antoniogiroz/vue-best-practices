import { type Ref, onBeforeMount, ref } from 'vue'
import type { RepositoryWidget } from '@/domain/RepositoryWidget'
import { config } from '@/config'
import type { RepositoryWidgetRepository } from '@/domain/RepositoryWidgetRepository'

const repositoryWidgets = ref<RepositoryWidget[]>([])

export function useRepositoryWidgets(repositoryWidgetRepository: RepositoryWidgetRepository): { repositoryWidgets: Ref<RepositoryWidget[]> } {
  onBeforeMount(async () => {
    let widgets = await repositoryWidgetRepository.search() || []

    if (widgets.length === 0)
      widgets = config.widgets.map(widget => ({ id: widget.id, repositoryUrl: widget.repository_url }))

    repositoryWidgets.value = widgets
  })

  return {
    repositoryWidgets,
  }
}