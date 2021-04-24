import {container} from 'tsyringe'

import IHashProvider from '@shared/container/providers/hashProvider/models/IHashProvider'
import HashProvider from '@shared/container/providers/hashProvider/implementations/HashProviderService'

container.registerSingleton<IHashProvider>(
    'HashProvider',HashProvider
)
